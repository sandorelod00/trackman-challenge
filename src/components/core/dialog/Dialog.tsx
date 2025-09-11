import { type FC, type ReactNode, useEffect, useRef } from 'react';

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
}

const Dialog: FC<DialogProps> = ({
    isOpen,
    onClose,
    children,
    className = '',
    ...props
}) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            if (!dialog.open) dialog.showModal();
        } else {
            if (dialog.open) dialog.close();
        }

        const handleCancel = (e: Event) => {
            e.preventDefault();
            onClose();
        };

        dialog.addEventListener('cancel', handleCancel);

        return () => {
            dialog.removeEventListener('cancel', handleCancel);
        };
    }, [isOpen, onClose]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === dialogRef.current) {
            onClose();
        }
    };

    const dialogProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !['onCopy', 'onCut', 'onPaste'].includes(key))
    );

    return (
        <dialog
            ref={dialogRef}
            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}
            onClick={handleBackdropClick}
            {...dialogProps}
        >
            <div>{children}</div>
        </dialog>
    );
};

export default Dialog;
