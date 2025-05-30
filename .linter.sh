#!/bin/bash
cd /home/kavia/workspace/code-generation/omnibook-ai-16339-5bd977bd/omni_book_ai
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

