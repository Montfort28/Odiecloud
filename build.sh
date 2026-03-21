#!/bin/bash

# ODIECLOUD²π Frontend Build & Deploy Script
# This script builds and prepares the frontend for deployment

echo "╔═══════════════════════════════════════════════╗"
echo "║   ODIECLOUD²π Frontend Build Script          ║"
echo "╚═══════════════════════════════════════════════╝"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Clean previous build
echo -e "${YELLOW}[1/6] Cleaning previous build...${NC}"
rm -rf dist
rm -rf node_modules/.vite
echo -e "${GREEN}✓ Clean complete${NC}"
echo ""

# Step 2: Install dependencies
echo -e "${YELLOW}[2/6] Installing dependencies...${NC}"
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Dependency installation failed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Dependencies installed${NC}"
echo ""

# Step 3: Run linter
echo -e "${YELLOW}[3/6] Running linter...${NC}"
npm run lint
if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠ Linting warnings found (continuing...)${NC}"
fi
echo -e "${GREEN}✓ Linting complete${NC}"
echo ""

# Step 4: Build for production
echo -e "${YELLOW}[4/6] Building for production...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}✗ Build failed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Build complete${NC}"
echo ""

# Step 5: Analyze build size
echo -e "${YELLOW}[5/6] Analyzing build...${NC}"
du -sh dist
echo ""
echo "Build contents:"
ls -lh dist/
echo -e "${GREEN}✓ Analysis complete${NC}"
echo ""

# Step 6: Preview build
echo -e "${YELLOW}[6/6] Starting preview server...${NC}"
echo -e "${GREEN}✓ Build ready for deployment!${NC}"
echo ""
echo "To preview locally, run: npm run preview"
echo "To deploy to Vercel, run: vercel --prod"
echo "To deploy to Netlify, run: netlify deploy --prod"
echo ""
echo "╔═══════════════════════════════════════════════╗"
echo "║   Build Complete! Ready to Deploy            ║"
echo "╚═══════════════════════════════════════════════╝"
