'use client';

import { FileQuestion } from 'lucide-react';

interface ContentFallbackProps {
  message?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export function ContentFallback({
  message = 'Content is not available right now.',
  ctaLabel,
  onCtaClick,
}: ContentFallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 py-12 px-4 text-center">
      <FileQuestion className="h-12 w-12 text-gray-400" aria-hidden />
      <p className="mt-3 text-sm text-gray-600">{message}</p>
      {ctaLabel && onCtaClick && (
        <button
          type="button"
          onClick={onCtaClick}
          className="mt-4 rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          {ctaLabel}
        </button>
      )}
    </div>
  );
}
