import React, { useContext, ReactNode, useState } from 'react';

interface Message {
    id: string;
    content: string;
    type: "BOT" | "USER";
}
type Anchor = 'right';

interface AppContextProps {
    openDrawer: boolean;
    toggleDrawer: () => void;
    toggleRightDrawer: any;
    content: string;
    setContent: any;
    messages: Message[];
    setMessages: any;
    sent: boolean,
    setSent: any,
    onSend: (content:string) => void;
    state: any, 
    setState: any
}

const AppContext = React.createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    const [sent, setSent] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [content, setContent] = useState<string>('');
    const [state, setState] = React.useState({
      right: false,
    });

    const toggleDrawer = () => setOpenDrawer(!openDrawer);

    const toggleRightDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    const onSend = (content: string) => {
        if (!content.trim()) return; 
        const userMessageId = `${Date.now()}-${Math.random()}`;
        const userMessage: Message = { id: userMessageId, content, type: "USER" };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setContent('');
        setSent(true);
    };

    return (
        <AppContext.Provider value={{ 
            openDrawer, toggleDrawer,
            messages, setMessages, 
            content, setContent, 
            onSend, 
            sent, setSent, 
            state, setState,
            toggleRightDrawer
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within an AppProvider');
    }
    return context;
}