import { useCallback, useMemo, useState } from "react";

export const useModal = (defaultOpened: boolean = false) => {
  const [isOpen, setIsOpen] = useState(defaultOpened);

  const toggle = useCallback(() => {
    setIsOpen((o) => !o);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  return useMemo(
    () => ({
      isOpen,
      toggle,
      close,
      open,
    }),
    [isOpen, open, close, toggle],
  );
};