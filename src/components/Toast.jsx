import { useCart } from '../context/useCart';
import { CheckCircle2, Info, AlertCircle, ShoppingBag, X } from 'lucide-react';

export const Toast = () => {
  const { activeToast, setActiveToast } = useCart();

  if (!activeToast) return null;

  const { message, type, actionText, onAction } = activeToast;

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-auto">
      <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#160c2b]/95 text-white backdrop-blur-2xl border border-purple-500/35 shadow-[0_12px_45px_rgba(112,26,179,0.5)] min-w-[320px] max-w-md">
        {type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#c084fc] shrink-0" />}
        {type === 'info' && <Info className="w-5 h-5 text-purple-400 shrink-0" />}
        {type === 'error' && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}

        <p className="text-xs sm:text-sm font-medium text-gray-200 flex-1 truncate">
          {message}
        </p>

        {actionText && onAction && (
          <button
            onClick={() => {
              onAction();
              setActiveToast(null);
            }}
            className="flex items-center gap-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-3 py-1 rounded-full shrink-0 shadow-sm transition-all"
          >
            <ShoppingBag className="w-3 h-3" />
            {actionText}
          </button>
        )}

        <button
          onClick={() => setActiveToast(null)}
          className="text-gray-400 hover:text-white p-1 rounded-full transition-colors shrink-0"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
