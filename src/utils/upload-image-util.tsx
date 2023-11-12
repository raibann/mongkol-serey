// import { Route_Api } from './route-util';

export const uploadImage = (
  e: React.ChangeEvent<HTMLInputElement>,
  onSuccess: (result: string, file: File) => void
) => {
  e.preventDefault();
  const imgType = ['png', 'jpg', 'jpeg'];

  if (e.target) {
    const file = e.target.files;

    if (file) {
      const reader = new FileReader();
      if (
        file[0]?.size <= 2 * 1024 * 1024 &&
        imgType.some((el) => file[0]?.type.includes(el))
      ) {
        reader.readAsDataURL(file[0]);
        reader.onload = () => onSuccess(reader.result as string, file[0]);
      } else {
        alert('Unsupported File');
      }
    }
  }
};

export const uploadImageMultiple = (
  e: React.ChangeEvent<HTMLInputElement>,
  onSuccess: (dataUrls: string[], files?: File[]) => void
) => {
  e.preventDefault();
  const imgType = ['png', 'jpg', 'jpeg'];
  let results: string[] = [];
  let newFiles: File[] = [];
  let unSupported: string[] = [];

  if (e.target) {
    const fileList = e.target.files;

    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        const reader = new FileReader();
        if (
          fileList[i].size <= 2 * 1024 * 1024 &&
          imgType.some((el) => fileList[i].type.includes(el))
        ) {
          reader.readAsDataURL(fileList[i]);
          reader.onload = () => {
            const tmpFile = fileList[i];
            let file = new File(
              [tmpFile],
              `${crypto.randomUUID()}-${tmpFile.name}`,
              {
                type: tmpFile.type,
                lastModified: tmpFile.lastModified,
              }
            );

            results.push(reader.result as string);
            newFiles.push(file);
          };
        } else {
          unSupported.push(fileList[i].name);
        }
      }
      if (unSupported.length > 0) {
        const joined = unSupported.join('\n');
        alert(`Unsupported files:\n${joined}`);
      }
    }
  }

  setTimeout(() => {
    onSuccess(results, newFiles);
  }, 100);
};

// export function getImage(imgUrl?: string) {
//   return imgUrl ? `${Route_Api.root}/api${imgUrl}` : '';
// }

// export function cutImagePath(path: string) {
//   return path.replace(`${Route_Api.root}/api`, '');
// }
