export type Wish = {
    id: string;
    user_id: string;
    title: string;
    type: 'text' | 'voice' | 'video';
    content: string | null;
    delivery_date: string | null;
    delivery_time: string | null;
    recurring: boolean;
    status: 'draft' | 'scheduled' | 'delivered';
    created_at: string;
    recipients?: Recipient[];
};

export type Recipient = {
    id: string;
    wish_id: string;
    email: string;
    name?: string | null;
    created_at?: string;
};

export type Profile = {
    id: string;
    name: string | null;
    email: string | null;
    created_at: string;
};
