export function generateVerifier(): string {
  const array = new Uint32Array(28);
  window.crypto.getRandomValues(array);

  return Array.from(array, (item) => `0${item.toString(16)}`.slice(-2)).join(
    "",
  );
}
export async function generateChallenge(verifier: string): Promise<string> {
  async function sha256(plain: string): Promise<ArrayBuffer> {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest("SHA-256", data);
  }

  function base64URLEncode(buffer: ArrayBuffer): string {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+\$/, "");
  }

  const hashed = await sha256(verifier);
  return base64URLEncode(hashed);
}
