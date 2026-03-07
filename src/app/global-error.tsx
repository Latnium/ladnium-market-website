'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-sans">
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
          <div className="w-full max-w-md rounded-lg border border-red-200 bg-red-50 p-8 text-center">
            <h1 className="text-lg font-semibold text-red-800">
              Something went wrong
            </h1>
            <p className="mt-2 text-sm text-red-700">
              An unexpected error occurred. Please try again.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-6 rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
