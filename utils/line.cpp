#include <iostream>
#include <fstream>

void addLineBreaks(const std::string &inputFilePath, const std::string &outputFilePath)
{
    std::ifstream inputFile(inputFilePath);
    std::ofstream outputFile(outputFilePath);

    if (!inputFile.is_open() || !outputFile.is_open())
    {
        std::cerr << "Error opening files." << std::endl;
        return;
    }

    const int maxCharsPerLine = 50;
    char ch;
    int charCount = 0;

    while (inputFile.get(ch))
    {
        outputFile.put(ch);
        charCount++;

        if (charCount == maxCharsPerLine)
        {
            outputFile.put('\n');
            charCount = 0;
        }
    }

    inputFile.close();
    outputFile.close();
}

int main()
{
    const std::string inputFilePath = "../data/temp.txt";
    const std::string outputFilePath = "../data/3.txt";

    addLineBreaks(inputFilePath, outputFilePath);

    std::cout << "Line breaks added. Output written to: " << outputFilePath << std::endl;

    return 0;
}
