# P.E.E.R Admin Portal

Admin portal for managing students, tracking performance, and assigning assignments for the P.E.E.R learning platform.

## Features

- **Dashboard**: Overview of students, assignments, and performance metrics
- **Student Management**: Add, edit, and view student information
- **Performance Analytics**: Track student performance across subjects
- **Assignment Management**: Create and manage assignments for students
- **Authentication**: Secure login for teachers and administrators
- **Docker Ready**: Easy deployment with Docker Compose

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Deployment**: Docker & Docker Compose

## Prerequisites

- Node.js 18+
- PostgreSQL (or use Docker Compose)
- npm or pnpm

## Getting Started

### Local Development

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and update the database connection string and other variables.

3. **Set up the database:**
   ```bash
   # Generate Prisma Client
   pnpm db:generate
   
   # Run migrations
   pnpm db:migrate
   
   # (Optional) Seed the database
   pnpm db:push
   ```

4. **Run the development server:**
   ```bash
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Docker Deployment

The easiest way to deploy the admin portal is using Docker Compose, which includes both the application and PostgreSQL database.

1. **Create environment file:**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your production values:
   ```env
   DATABASE_URL="postgresql://vidyut:vidyut_password@postgres:5432/vidyut_admin?schema=public"
   NEXTAUTH_SECRET="your-secure-random-secret"
   NEXTAUTH_URL="http://your-domain.com:3000"
   ```

2. **Build and start the containers:**
   ```bash
   docker-compose up -d
   ```

3. **Check the status:**
   ```bash
   docker-compose ps
   ```

4. **View logs:**
   ```bash
   docker-compose logs -f admin-portal
   ```

5. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser

### Docker Commands

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# Restart services
docker-compose restart

# View logs
docker-compose logs -f

# Rebuild and restart
docker-compose up -d --build

# Stop and remove volumes (WARNING: deletes database data)
docker-compose down -v
```

## Database Management

### Prisma Commands

```bash
# Generate Prisma Client
pnpm db:generate

# Create a new migration
pnpm db:migrate

# Push schema changes (development only)
pnpm db:push

# Open Prisma Studio (database GUI)
pnpm db:studio
```

### Accessing PostgreSQL in Docker

```bash
# Connect to PostgreSQL container
docker exec -it vidyut-admin-postgres psql -U vidyut -d vidyut_admin

# Backup database
docker exec vidyut-admin-postgres pg_dump -U vidyut vidyut_admin > backup.sql

# Restore database
docker exec -i vidyut-admin-postgres psql -U vidyut vidyut_admin < backup.sql
```

## Project Structure

```
apps/admin/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard page
│   ├── students/          # Student management
│   ├── performance/       # Performance analytics
│   ├── assignments/       # Assignment management
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # UI components
│   └── Sidebar.tsx       # Navigation sidebar
├── lib/                   # Utility functions
│   ├── prisma.ts         # Prisma client
│   └── utils.ts          # Helper functions
├── prisma/               # Database schema
│   └── schema.prisma     # Prisma schema
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Docker Compose config
└── package.json          # Dependencies
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@localhost:5432/db` |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js | Random string (generate with `openssl rand -base64 32`) |
| `NEXTAUTH_URL` | Application URL | `http://localhost:3000` |
| `NODE_ENV` | Environment | `development` or `production` |

## API Routes

- `GET /api/students` - List all students
- `POST /api/students` - Create a new student
- `GET /api/students/[id]` - Get student details
- `PUT /api/students/[id]` - Update student
- `DELETE /api/students/[id]` - Delete student
- `GET /api/performance` - Get performance data
- `POST /api/performance` - Add performance record
- `GET /api/assignments` - List assignments
- `POST /api/assignments` - Create assignment

## Production Deployment

### Using Docker

1. Update environment variables in `.env`
2. Build and deploy:
   ```bash
   docker-compose up -d --build
   ```

### Using a VPS

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Set up environment variables
4. Build the application: `pnpm build`
5. Start with PM2 or similar: `pm2 start npm --name "admin-portal" -- start`

### Using Cloud Platforms

- **Vercel**: Connect your Git repository and deploy
- **Railway**: Use the provided `Dockerfile`
- **Render**: Deploy with Docker or Node.js buildpack

## Troubleshooting

### Database Connection Issues

```bash
# Check if PostgreSQL is running
docker-compose ps

# View PostgreSQL logs
docker-compose logs postgres

# Restart PostgreSQL
docker-compose restart postgres
```

### Application Not Starting

```bash
# Check application logs
docker-compose logs admin-portal

# Rebuild the container
docker-compose up -d --build admin-portal
```

### Port Already in Use

If port 3000 or 5432 is already in use, update the ports in `docker-compose.yml`:

```yaml
ports:
  - "3001:3000"  # Change host port
```

## Security Considerations

- Change default database credentials in production
- Use a strong `NEXTAUTH_SECRET`
- Enable HTTPS in production
- Implement rate limiting for API routes
- Regular database backups
- Keep dependencies updated

## Contributing

Please see the main [README](../../README.md) for contribution guidelines.

## License

MIT License - see [LICENSE](../../LICENSE) for details.
