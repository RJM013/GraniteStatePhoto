# Granite State Photo Website

A professional photography website showcasing family portraits, sports action shots, nature landscapes, and seasonal photography across New Hampshire.

## Project Structure

```
granite-state-photo/
│
├── index.html              # Homepage
├── family.html             # Family gallery page
├── sports.html             # Sports gallery page
├── landscape.html          # Nature gallery page
├── seasonal.html           # Seasonal gallery page
├── contact.html            # Contact form page
│
├── css/                    # CSS directory
│   ├── main.css            # Shared styles across all pages
│   ├── gallery.css         # Specific gallery styles
│   ├── contact.css         # Contact page styles
│   └── responsive.css      # Media queries for responsive design
│
├── js/                     # JavaScript directory
│   ├── navigation.js       # Navigation and shared functionality
│   ├── gallery.js          # Gallery filtering and lightbox
│   ├── contact.js          # Form validation and submission
│   └── seasonal.js         # Season tabs functionality
│
├── images/                 # Image assets directory
│   ├── logo/               # Logo variations
│   ├── hero/               # Hero banner images
│   ├── about/              # About section images
│   ├── gallery/            # Gallery images
│   │   ├── family/         # Family photos
│   │   ├── sports/         # Sports photos
│   │   ├── nature/         # Nature photos
│   │   └── seasonal/       # Seasonal photos
│   └── map/                # Map image for contact page
│
├── amplify/                # Amplify configuration directory (created by AWS Amplify CLI)
│
├── amplify.yml             # Amplify build configuration
└── README.md               # This documentation file
```

## AWS Amplify Deployment

### Prerequisites

- AWS Account
- AWS Amplify CLI installed (optional for CLI deployment)
- Git repository (GitHub, GitLab, Bitbucket, etc.)

### Deployment Steps

#### 1. Prepare Your Repository

1. Create a Git repository with the structure outlined above
2. Push the code to your repository

#### 2. Deploy with AWS Amplify Console

1. Sign in to the [AWS Management Console](https://aws.amazon.com/console/)
2. Navigate to AWS Amplify
3. Choose "Host web app" → "Get started"
4. Select your Git provider and authenticate
5. Select your repository and branch
6. Configure build settings:
   - Leave default settings or use the provided `amplify.yml` file
7. Review and confirm deployment

#### 3. Set Up Backend Resources (for Contact Form)

##### Using Amplify CLI (recommended)

1. Install Amplify CLI: `npm install -g @aws-amplify/cli`
2. Initialize Amplify in your project: `amplify init`
3. Add API Gateway and Lambda function:
   ```
   amplify add api
   ```
   - Choose REST API
   - Create a new Lambda function for `/contact` endpoint

4. Add DynamoDB storage:
   ```
   amplify add storage
   ```
   - Choose DynamoDB
   - Create a `ContactSubmissions` table

5. Push the backend changes:
   ```
   amplify push
   ```

##### Manual Setup (alternative)

1. Create a DynamoDB table for storing contact submissions
2. Create a Lambda function using the provided `contact-lambda.js` code
3. Set up an API Gateway endpoint that triggers the Lambda function
4. Configure CORS to allow requests from your domain

#### 4. Configure Environment Variables

In the Amplify Console:
1. Navigate to your app → Environment variables
2. Add the following variables:
   - `API_ENDPOINT`: URL of your API Gateway endpoint
   - `EMAIL_RECIPIENT`: Email where form submissions should be sent
   - `EMAIL_SENDER`: Email that will appear as the sender

#### 5. Set Up Domain

1. In the Amplify Console, go to "Domain management"
2. Add your custom domain
3. Follow the verification steps
4. Configure subdomains if needed

## Local Development

1. Clone the repository
   ```
   git clone [repository-url]
   ```

2. Navigate to the project directory
   ```
   cd granite-state-photo
   ```

3. Open the project in your preferred code editor

4. For local testing, you can use a simple local server:
   - With Python: `python -m http.server`
   - With Node.js: `npx serve`

## Image Placeholder Notes

The current implementation uses placeholder paths for images. Before deployment:

1. Replace all placeholder images with actual photography images
2. Update image paths in HTML files
3. Optimize images for web (consider using tools like ImageOptim or TinyPNG)

## Contact Form Implementation

The contact form in its current state submits to a lambda function that:
1. Stores the submission in DynamoDB
2. Sends an email notification using Amazon SES

Before the form will work properly:
1. Verify your sender email in Amazon SES
2. Deploy the Lambda function with environment variables
3. Update the API endpoint in contact.js

## License

All rights reserved © 2025 Granite State Photo