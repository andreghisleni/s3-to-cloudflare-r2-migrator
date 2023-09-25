# S3 to Cloudflare R2 File Migrator

This is a simple application that allows you to migrate files from an S3 bucket to a Cloudflare R2 bucket. Migration is done using the `pnpm` command to ensure efficiency and ease of use.

## Requirements

Before getting started, make sure you have the following prerequisites installed on your system:

- Node.js: [Download](https://nodejs.org/)
- pnpm: [Installation](https://pnpm.io/installation)

## Configuration

1. Clone this repository to your local environment:

   ```bash
   git clone https://github.com/andreghisleni/s3-to-cloudflare-r2-migrator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd s3-to-cloudflare-r2-migrator
   ```

3. Install the dependencies using pnpm:

   ```bash
   pnpm install
   ```

4. Configure your S3 and Cloudflare R2 credentials:

   Open the `.env` file and configure the following environment variables:

   ```
    AWS_ACCESS_KEY_ID=your-access-key
    AWS_SECRET_ACCESS_KEY=your-secret-key

    CLOUDFLARE_ACCOUNT_ID=your-cloudflare-account-id
    CLOUDFLARE_ACCESS_KEY=your-cloudflare-access-key
    CLOUDFLARE_SECRET_KEY=your-cloudflare-secret-key

    BUCKET_NAME=your-bucket-name
   ```

   Be sure to replace the values above with your own.

## Usage

To start migrating files from the S3 bucket to the Cloudflare R2 bucket, run the following command:

```bash
pnpm run migrate
```

This will initiate the migration process and display progress information in the console.

## Contributions

If you wish to contribute to this project, please feel free to create pull requests or report issues in the [Issues](https://github.com/your-username/s3-to-cloudflare-r2-migrator/issues) section.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

Thank you for using our S3 to Cloudflare R2 file migrator! If you have any questions or need assistance, please don't hesitate to reach out.
