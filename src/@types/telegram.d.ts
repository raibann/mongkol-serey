declare namespace ITelegram {
  interface ISendDocumentResponse {
    ok: boolean;
    result: SendDocumentResult;
  }

  interface SendDocumentResult {
    message_id: number;
    from: From;
    chat: Chat;
    date: number;
    document: Document;
  }

  interface Document {
    file_name: string;
    mime_type: string;
    thumb: Thumb;
    file_id: string;
    file_unique_id: string;
    file_size: number;
  }

  interface Thumb {
    file_id: string;
    file_unique_id: string;
    file_size: number;
    width: number;
    height: number;
  }

  interface Chat {
    id: number;
    title: string;
    type: string;
    all_members_are_administrators: boolean;
  }

  interface From {
    id: number;
    is_bot: boolean;
    first_name: string;
    username: string;
  }

  interface IGetFileResponse {
    ok: boolean;
    result: GetFileResult;
  }

  interface GetFileResult {
    file_id: string;
    file_unique_id: string;
    file_size: number;
    file_path: string;
  }
}
