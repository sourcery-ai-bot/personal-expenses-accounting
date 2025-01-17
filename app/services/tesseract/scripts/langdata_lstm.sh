#!/bin/bash

cd $TESSERACT/tessdata
mkdir langdata_lstm && cd langdata_lstm

wget https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/Latin.unicharset \
    https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/Latin.xheights \
    https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/common.punc \
    https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/common.unicharambigs \
    https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/desired_bigrams.txt \
    https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/font_properties \
    https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/forbidden_characters_default \
    https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/radical-stroke.txt


# Install languages
sudo apt-get install tesseract-ocr-eng
sudo apt-get install tesseract-ocr-lav

# eng data
# mkdir eng && cd eng
# wget https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/eng/desired_characters \
#     https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/eng/eng.numbers \
#     https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/eng/eng.punc \
#     https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/eng/eng.singles_text \
#     https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/eng/eng.training_text \
#     https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/eng/eng.unicharambigs \
#     https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/eng/eng.unicharset \
#     https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/eng/eng.wordlist \
#     https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/eng/okfonts.txt
# cd ..

# lav data
# mkdir lav && cd lav
# wget https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/lav/desired_characters \
#     https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/lav/lav.numbers \
#     https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/lav/lav.punc \
#     https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/lav/lav.singles_text \
#     https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/lav/lav.training_text \
#     https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/lav/lav.unicharset \
#     https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/lav/lav.wordlist \
#     https://raw.githubusercontent.com/tesseract-ocr/langdata_lstm/master/lav/okfonts.txt
# cd ..

# traineddata_best
cd ..
wget https://raw.githubusercontent.com/tesseract-ocr/tessdata_best/master/eng.traineddata \
    https://raw.githubusercontent.com/tesseract-ocr/tessdata_best/master/lav.traineddata
