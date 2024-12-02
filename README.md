# TODO Finder CLI

A simple and efficient CLI tool to scan your workspace, find all `// TODO:` comments, and display them with their file paths and line numbers. Perfect for managing outstanding tasks in your codebase!

## Features

- Scans JavaScript (`.js`) and TypeScript (`.ts`) files.
  - Also supports (`.jsx`) and (`.tsx`) files.
- Ignores `node_modules` and other specified directories.
- Displays file paths as relative paths for easier navigation.
- Provides line numbers and the full TODO comment content.

## Installation

### Clone the Repository
```bash
git clone https://github.com/dansousa09/todo-finder.git
cd todo-finder
```

### Install Dependencies
```bash
npm install
```

### Link the CLI Globally
```bash
npm link
```

## Usage

Run the CLI tool in your project directory to find all TODO comments:

```bash
todo --directory ./path-to-your-project
```

or just...

```bash
cd /my/workspace
todo
```

### Options

- `--directory` (`-d`): Specify the directory to scan. Defaults to the current directory (`.`).
- `--help` (`-h`): Show usage information.

### Example Output

```bash
$ todo --directory ./src
Scanning directory: ./src
Found 3 TODO comments:
src/index.ts:5 - // TODO: Refactor this function
utils/helpers.ts:12 - // TODO: Add more tests
config/settings.ts:2 - // TODO: Update this configuration
```

## Development

If you wish to contribute or customize the CLI:

1. Clone the repository and install dependencies as shown above.
2. Make your changes in `cli.ts`.
3. Compile TypeScript to JavaScript:
   ```bash
   npx tsc
   ```
4. Test your changes:
   ```bash
   npm link
   todo --directory ./test-project
   ```

## Roadmap

- Add support for additional file extensions.
- Include configuration options for excluding specific directories or patterns.
- Generate a summary report.

## Contributing

Contributions are welcome! Please fork the repository, create a new branch for your feature or bugfix, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding!

