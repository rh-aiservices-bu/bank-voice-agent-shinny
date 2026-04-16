.PHONY: dev build preview lint typecheck install clean

dev: ## Start dev server
	npm run dev

build: ## Build for production
	npm run build

preview: ## Preview production build
	npm run preview

lint: ## Run ESLint
	npm run lint

typecheck: ## Run TypeScript type checking
	npx tsc --noEmit

install: ## Install dependencies
	npm install

clean: ## Remove build artifacts and node_modules
	rm -rf dist node_modules

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'
