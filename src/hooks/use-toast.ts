import { toast } from "sonner";

export const useToast = () => {
  return {
    toast: (message: string, options?: Parameters<typeof toast>[1]) => {
      toast(message, options);
    },
    success: (message: string, options?: Parameters<typeof toast.success>[1]) => {
      toast.success(message, options);
    },
    error: (message: string, options?: Parameters<typeof toast.error>[1]) => {
      toast.error(message, options);
    },
    warning: (message: string, options?: Parameters<typeof toast.warning>[1]) => {
      toast.warning(message, options);
    },
    info: (message: string, options?: Parameters<typeof toast.info>[1]) => {
      toast.info(message, options);
    },
    promise: <T>(
      promise: Promise<T>,
      msgs: { loading: string; success: string; error: string } & Parameters<typeof toast.promise>[1]
    ) => {
      return toast.promise(promise, msgs);
    },
  };
};
