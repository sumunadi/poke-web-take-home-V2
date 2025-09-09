# Pokémon Analytics Dashboard - Frontend Take-Home Assignment

## Overview
Build an interactive analytics dashboard using the Pokémon API to visualize and analyze Pokémon data. Think of this as a "Pokémon Performance Analytics" platform where you're analyzing engagement and performance metrics across different Pokémon.

**Time Expectation:** 2-4 hours maximum. Focus on demonstrating your approach and decision-making rather than creating a perfect solution.

## Requirements

### Core Features (Must Have)
- **Data Fetching**: Use the [PokéAPI](https://pokeapi.co/) to fetch Pokémon data
- **Data Visualization**: Display at least 2 different chart types showing meaningful insights
- **Interactive Filtering**: Allow users to filter data by at least one dimension (type, generation, etc.)
- **Responsive Design**: Works well on desktop and mobile devices
- **Error Handling**: Handle loading states and API errors gracefully

### Suggested Visualizations
Pick 2-3 that interest you:
- **Type Distribution**: Bar/pie chart showing most common Pokémon types
- **Stat Analysis**: Radar/scatter plot comparing Pokémon stats (HP, Attack, Defense, etc.)
- **Generation Trends**: Line chart showing how average stats changed over generations
- **Height/Weight Correlation**: Scatter plot exploring physical characteristics
- **Legendary vs Regular**: Comparative analysis of legendary Pokémon performance

### Nice-to-Have Features
- Additional chart types or interactions
- Smooth animations and transitions
- Advanced filtering (multiple criteria, search)
- Detailed Pokémon information on click/hover
- Performance optimizations for large datasets

### Stretch Goals
- Dark/light mode toggle
- Export data functionality
- Comparison tool (side-by-side Pokémon analysis)
- Custom color schemes based on Pokémon types

## Technical Considerations
- Use any frontend framework/library you're comfortable with (React, Vue, vanilla JS, etc.)
- For charts, consider libraries like Chart.js, D3.js, Recharts, or similar
- Think about data transformation and state management
- Consider API rate limiting and caching strategies
- Write clean, readable code with good component structure

## Deliverables
1. **Working application** (deployed link preferred, or runnable locally)
2. **Source code** (GitHub repository)
3. **Brief README** explaining:
   - How to run the project locally
   - Your technology choices and why
   - What you'd improve with more time
   - Any assumptions or trade-offs you made

## APIs and Resources
- **PokéAPI Base URL**: `https://pokeapi.co/api/v2/`
- **Useful Endpoints**:
  - Get first 151 Pokémon: `/pokemon?limit=151`
  - Get specific Pokémon: `/pokemon/{id or name}`
  - Get Pokémon species info: `/pokemon-species/{id}`
  - Get types: `/type`

## Evaluation Criteria
We'll be looking at:
- **Code Quality**: Clean, readable, well-organized code
- **User Experience**: Intuitive interface and smooth interactions
- **Data Handling**: How you fetch, transform, and present data
- **Visual Design**: Clean, professional appearance
- **Problem Solving**: How you handle edge cases and constraints
- **Communication**: Clear documentation and commit messages

## Getting Started
We recommend starting with:
1. Set up your development environment by **forking this repo** to your github account
2. Explore the PokéAPI to understand the data structure
3. Build basic data fetching functionality
4. Create your first visualization
5. Add filtering and interactivity
6. Polish the UI and add error handling
7. Once complete, please go ahead and tag [@theonlymikeever](https://github.com/theonlymikeever) for a code review or send us the link to your fork.

## Questions?
If you have any questions about the requirements or need clarification, please don't hesitate to reach out. Good luck!

---
*Remember: This is about demonstrating your thought process and skills, not creating a production-ready application. Focus on what you do best!*