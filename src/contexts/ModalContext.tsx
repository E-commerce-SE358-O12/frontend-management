"use client";

import ClaimModal from "@/components/ClaimModal/ClaimModal";
import CreateProductFormModal from "@/components/CreateProductForm/CreateProductFormModal";
import { ReactNodeChildren } from "@/types/ReactNodeChildren";
import { ReactNode, createContext, useState } from "react";

export function ModalProvider({ children }: ReactNodeChildren) {
    const [modalState, setModalState] = useState<IModalState>({
        addProduct: { isOpen: false },
        updateProduct: { isOpen: false },
        addCategory: { isOpen: false },
        updateCategory: { isOpen: false },
        claim: { isOpen: false },
    });

    return (
        <ModalStateContext.Provider
            value={{
                modalState,
                setModalState: (d) => {
                    setModalState((prev) => ({ ...prev, ...d }));
                },
            }}
        >
            {children}
            <CreateProductFormModal />
            <ClaimModal />
        </ModalStateContext.Provider>
    );
}

export const ModalStateContext = createContext<IModalStateContext>({
    modalState: {
        addProduct: { isOpen: false },
        updateProduct: { isOpen: false },
        addCategory: { isOpen: false },
        updateCategory: { isOpen: false },
        claim: { isOpen: false },
    },
    setModalState: () => {},
});

export type IModalStateContext = {
    modalState: IModalState;
    setModalState: (d: {
        [modal in keyof Partial<IModalState>]: IModalState[modal];
    }) => any;
};

export type IModalState = {
    addProduct: IModalStateItem;
    updateProduct: IModalStateItem & { productId?: string };
    addCategory: IModalStateItem;
    updateCategory: IModalStateItem & { categoryId?: string };
    claim: IModalStateItem & {
        message?: ReactNode;
        onResponse?: (confirm: boolean) => any;
    };
};

export type IModalStateItem = {
    isOpen: boolean;
    refetch?: () => any;
};

