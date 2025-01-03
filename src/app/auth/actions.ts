'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { signUpSchema, signInSchema } from './schema';

import { createClient } from '@/lib/supabase/server';

type SignupFormData = {
  email: string;
  password: string;
  confirmPassword?: string;
};

type SigninFormData = Omit<SignupFormData, 'confirmPassword'>;

type ActionResponse<T> =
  | {
      state: T;
      message: string;
      errors?: {
        [K in keyof T]?: string[];
      };
    }
  | undefined;

export async function signin(
  _: ActionResponse<SigninFormData>,
  formData: FormData
): Promise<ActionResponse<SigninFormData>> {
  const rawData: SigninFormData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  };

  const validatedData = signInSchema.safeParse(rawData);

  if (!validatedData.success) {
    return {
      state: rawData,
      message: 'フォームのエラーを修正してください',
      errors: validatedData.error.flatten().fieldErrors
    };
  }

  const { email, password } = validatedData.data;

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    return {
      state: rawData,
      message: error.message
    };
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(
  _: ActionResponse<SignupFormData>,
  formData: FormData
): Promise<ActionResponse<SignupFormData>> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const rawData: SignupFormData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string
  };

  const validatedData = signUpSchema.safeParse(rawData);

  if (!validatedData.success) {
    return {
      state: rawData,
      message: 'フォームのエラーを修正してください',
      errors: validatedData.error.flatten().fieldErrors
    };
  }

  const { email, password } = validatedData.data;

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    return {
      state: rawData,
      message: error.message
    };
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
