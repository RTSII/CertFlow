import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

// Root page - redirect to appropriate location
export default async function RootPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // All users go to modules (dashboard) - if not logged in, middleware handles redirect
  redirect('/modules')
}
