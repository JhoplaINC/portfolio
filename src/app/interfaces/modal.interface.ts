export interface iModal {
    isOpen: boolean;
    handler: () => void;
    title: string;
    content: string;
    buttons: { text: string; handler: () => void; classes: string }[];
}
