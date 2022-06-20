export interface Message {
    id: number;
    senderID: number;
    senderUsername: string;
    senderPhotoURL: string;
    recipientID: number;
    recipientUsername: string;
    recipientPhotoURL: string;
    content: string;
    dateRead: Date;
    messageSent: Date;
}