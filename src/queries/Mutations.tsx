import { UnhashedCredentialParams } from '@/types/interfaces.ts';
const url = 'http://localhost:3005';
export async function loginQuery(credentials: UnhashedCredentialParams) {
  const response = await fetch(`${url}/api/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
