import { useState } from "react";

const ErrorBoundary = ({children}) => {
    const [hasError, setHasError] = useState(false);

    const componentDidCatch = (error, info) => {
        console.error("Error encontrado: ", error);
        console.error("Información del error: ", info);

        setHasError(true);
    }

    if (hasError) {
        return <div>Oh boy!! Sometime is wrong!!</div>
    }

  return children;
}

export default ErrorBoundary;