export interface ErrorBoundaryProps {
    error: Error & { digest?: string };
    reset: () => void
};