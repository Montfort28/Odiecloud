@echo off
REM ODIECLOUD²π Frontend Build Script for Windows

echo ╔═══════════════════════════════════════════════╗
echo ║   ODIECLOUD²π Frontend Build Script          ║
echo ╚═══════════════════════════════════════════════╝
echo.

REM Step 1: Clean previous build
echo [1/6] Cleaning previous build...
if exist dist rmdir /s /q dist
if exist node_modules\.vite rmdir /s /q node_modules\.vite
echo ✓ Clean complete
echo.

REM Step 2: Install dependencies
echo [2/6] Installing dependencies...
call npm install
if errorlevel 1 (
    echo ✗ Dependency installation failed
    exit /b 1
)
echo ✓ Dependencies installed
echo.

REM Step 3: Run linter
echo [3/6] Running linter...
call npm run lint
echo ✓ Linting complete
echo.

REM Step 4: Build for production
echo [4/6] Building for production...
call npm run build
if errorlevel 1 (
    echo ✗ Build failed
    exit /b 1
)
echo ✓ Build complete
echo.

REM Step 5: Analyze build
echo [5/6] Analyzing build...
dir dist
echo ✓ Analysis complete
echo.

REM Step 6: Complete
echo [6/6] Build ready!
echo ✓ Build complete and ready for deployment!
echo.
echo To preview locally, run: npm run preview
echo To deploy to Vercel, run: vercel --prod
echo To deploy to Netlify, run: netlify deploy --prod
echo.
echo ╔═══════════════════════════════════════════════╗
echo ║   Build Complete! Ready to Deploy            ║
echo ╚═══════════════════════════════════════════════╝

pause
