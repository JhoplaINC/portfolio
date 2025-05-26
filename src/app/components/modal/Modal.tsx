"use client";

import { useEffect, useState } from "react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import { iModal } from "@/app/interfaces/modal.interface";

export default function Modal({ isOpen, title, content, buttons }: iModal) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(isOpen);
    }, [open, isOpen]);

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden py-4 px-8 rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div>
                            <div>
                                <div>
                                    <DialogTitle className="text-center text-2xl mb-4 font-semibold">
                                        {title}
                                    </DialogTitle>
                                    <div className="mb-6">
                                        <p>{content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4">
                            {buttons.map((button, index) => (
                                <button
                                    type="button"
                                    key={index}
                                    onClick={button.handler}
                                    className={button.classes}
                                >
                                    {button.text}
                                </button>
                            ))}
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}
