# Floor Plan Creator

A Next.js floor plan creator with 2D/3D views, room design, furniture placement, and export features. Clone of [floorplancreator.net](https://floorplancreator.net).

## Features

- **2D Canvas Editor** - Interactive floor plan design with pan, zoom, and grid
- - **Room Types** - Square, L-shape, U-shape, T-shape rooms
  - - **Walls** - Customizable wall thickness and color
    - - **Doors & Windows** - Various types including sliding, folding, pocket doors
      - - **Furniture** - Living room, bedroom, kitchen, bathroom, office furniture
        - - **3D View** - Real-time 3D visualization using Three.js
          - - **Multi-floor Support** - Design multiple floors
            - - **Annotations** - Labels, dimensions, arrows
              - - **Undo/Redo** - Full history support
                - - **Settings** - Units, grid, snap-to-grid options
                 
                  - ## Quick Start
                 
                  - ```bash
                    # Clone the repository
                    git clone https://github.com/edmirjano/floor-plan-creator.git
                    cd floor-plan-creator

                    # Install dependencies
                    npm install

                    # Run development server
                    npm run dev
                    ```

                    Open [http://localhost:3000](http://localhost:3000) in your browser.

                    ## Tech Stack

                    - **Next.js 14** - React framework
                    - - **TypeScript** - Type safety
                      - - **Tailwind CSS** - Styling
                        - - **Zustand** - State management
                          - - **Three.js** - 3D rendering
                            - - **Lucide React** - Icons
                             
                              - ## Project Structure
                             
                              - ```
                                src/
                                ├── app/
                                │   ├── page.tsx          # Main page
                                │   ├── layout.tsx        # Root layout
                                │   └── globals.css       # Global styles
                                ├── components/
                                │   ├── FloorPlanEditor.tsx
                                │   ├── Canvas/
                                │   ├── Toolbar/
                                │   └── Sidebar/
                                ├── store/
                                │   └── useStore.ts       # Zustand store
                                ├── types/
                                │   └── index.ts          # TypeScript types
                                └── data/
                                    └── categories.ts     # Furniture categories
                                ```

                                ## License

                                MIT License - see [LICENSE](LICENSE) file.
