import { ErrorBoundary } from "react-error-boundary";
import MyLoader from "../Loader/Loader"; // Import your loader

function Customui({ resetErrorBoundary }) {
    return (
        <div role="alert" className="alert alert-error">
            <p>Something went wrong. Please try again.</p>
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
    );
}

export default function CustomError({ children }) {
    return (
        <ErrorBoundary
            fallbackRender={({ resetErrorBoundary }) => (
                <Customui resetErrorBoundary={resetErrorBoundary} />
            )}
            onReset={() => {
                // Optional: Reload the page or reset component state
                window.location.reload();
            }}
        >
            {children}
        </ErrorBoundary>
    );
}
