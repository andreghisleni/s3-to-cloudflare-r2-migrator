import { download_upload } from "./download_upload";
import { getAllFileNames } from "./get_all_file_names";

const bootstrap = async () => {
  try {

    const file_names = await getAllFileNames();

    if (file_names instanceof Array) {

      console.log(`Found ${file_names.length} files.`);

      file_names.forEach(async (file) => await download_upload(file as string));
    }




  } catch (err) {
    console.error(err);
  }
};

bootstrap();