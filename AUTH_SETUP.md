# Setup Autentikasi

## Prasyarat
- PostgreSQL database
- Node.js dan npm terinstall

## Langkah Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Konfigurasi Environment Variables
Copy file `.env.example` ke `.env` dan sesuaikan dengan konfigurasi database Anda:
```bash
cp .env.example .env
```

Edit file `.env`:
```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

### 3. Setup Database
Jalankan migrasi Prisma untuk membuat tabel di database:
```bash
npx prisma migrate dev --name init
```

Atau jika sudah ada migrasi, jalankan:
```bash
npx prisma migrate deploy
```

Generate Prisma Client:
```bash
npx prisma generate
```

### 4. Jalankan Development Server
```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`

## Halaman Autentikasi

### Akses Halaman
- `/auth` - Halaman utama dengan tab Daftar dan Masuk
- `/login` - Alias ke tab Masuk
- `/register` - Alias ke tab Daftar

### Tipe User
Sistem secara otomatis mengklasifikasikan user berdasarkan domain email:
- `*@student.unsrat.ac.id` → STUDENT (wajib isi NIM)
- `*@unsrat.ac.id` (non-student) → STAFF (wajib isi NIP)
- Domain lainnya → PUBLIC (NIM/NIP opsional)

### Validasi
- Email: format valid
- Password: minimal 8 karakter
- Konfirmasi password harus sama
- NIM/NIP: wajib untuk STUDENT dan STAFF

## API Endpoints

### Register
**POST** `/api/auth/register`

Body:
```json
{
  "name": "Nama Lengkap",
  "email": "email@example.com",
  "password": "password123",
  "confirmPassword": "password123",
  "identifier": "NIM/NIP (opsional untuk PUBLIC)"
}
```

### NextAuth Endpoints
- **POST** `/api/auth/signin` - Login
- **POST** `/api/auth/signout` - Logout
- **GET** `/api/auth/session` - Get current session

## Struktur Session
Session NextAuth berisi:
```typescript
{
  user: {
    id: string;
    name: string;
    email: string;
    userType: "STUDENT" | "STAFF" | "PUBLIC";
    identifier?: string | null;
  }
}
```

## Troubleshooting

### Error: Database connection
Pastikan PostgreSQL berjalan dan `DATABASE_URL` di `.env` sudah benar.

### Error: Prisma Client
Jalankan `npx prisma generate` untuk generate Prisma Client.

### Error: NextAuth
Pastikan `NEXTAUTH_SECRET` sudah diset di `.env`.
