import re

with open('src/data/site.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the 'note' property from footer objects
content = re.sub(r'\s*note:\s*"[^"]*",\n', '\n', content)

with open('src/data/site.ts', 'w', encoding='utf-8') as f:
    f.write(content)
