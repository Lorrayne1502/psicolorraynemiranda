import React, { Component, ErrorInfo, ReactNode } from 'react';
import Button from './Button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-[#FCE4EE] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">⚠️</span>
            </div>
            <h1 className="text-2xl font-semibold text-[#333333] mb-4">
              Ops! Algo deu errado
            </h1>
            <p className="text-[#666666] mb-6">
              Ocorreu um erro inesperado. Por favor, recarregue a página ou tente novamente mais tarde.
            </p>
            <div className="space-y-3">
              <Button 
                onClick={() => window.location.reload()}
                className="w-full"
              >
                Recarregar Página
              </Button>
              <Button 
                to="/"
                variant="outline"
                className="w-full"
              >
                Voltar ao Início
              </Button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-[#999999]">
                  Detalhes do erro (desenvolvimento)
                </summary>
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;