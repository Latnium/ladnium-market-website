export function PageLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-10 w-10 animate-spin rounded-full border-2 border-primary-200 border-t-primary-600"
          aria-hidden
        />
        <p className="text-sm text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
