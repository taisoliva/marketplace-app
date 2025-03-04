type Attachment = {
  id: string;
  url: string;
};

export type IAttachmentResponse = {
  attachments: Attachment[];
};
