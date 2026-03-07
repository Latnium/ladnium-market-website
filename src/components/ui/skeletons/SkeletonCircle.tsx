interface SkeletonCircleProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-12 w-12',
  lg: 'h-20 w-20',
};

export function SkeletonCircle({ size = 'md', className = '' }: SkeletonCircleProps) {
  return (
    <div
      className={`animate-pulse rounded-full bg-gray-200 ${sizeClasses[size]} ${className}`}
      aria-hidden
    />
  );
}
