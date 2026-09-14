/**
 * FamilyTreeSVG — Pure organic SVG family tree visualization from JSON data
 *
 * Renders family trees with realistic trunks, branching boughs, customizable botanical leaves,
 * pan/zoom, dynamic color theming, and vector SVG export.
 */

export interface FamilyTreePartner {
  full_name: string;
  family_name?: string;
  [key: string]: any;
}

export interface FamilyTreeNode {
  full_name: string;
  family_name?: string;
  partners?: FamilyTreePartner[] | FamilyTreeNode[];
  children?: FamilyTreeNode[];
  [key: string]: any;
}

export type TrunkStyle =
  | 'classic'
  | 'woodcut'
  | 'earth_roots'
  | 'calligraphic'
  | 'gnarled_veteran'
  | 'banyan_cathedral'
  | 'dragon_bonsai'
  | 'swirling_olive'
  | 'banyan_props'
  | 'hollow_cleft'
  | 'fluted_redwood'
  | 'twin_boles'
  | string;

export type BranchStyle =
  | 'woodcut'
  | 'gnarled'
  | 'classic'
  | 'willow_tendril'
  | 'zen_bonsai'
  | string;

export type LeafStyle =
  | 'ginkgo'
  | 'fan'
  | 'bodhi'
  | 'peepal'
  | 'oak'
  | 'lobed'
  | 'linden'
  | 'heart'
  | 'cordate'
  | 'rounded'
  | 'oval'
  | 'classic'
  | 'maple'
  | 'japanese_maple'
  | 'birch'
  | 'serrated_birch'
  | 'laurel'
  | string;

export type LeafRenderMode = 'svg' | 'png';

export interface FamilyTreeOptions {
  /** Hex color for leaves (e.g. '#17361a') */
  leafColor?: string;
  /** Hex color for branches (e.g. '#3a1f13') */
  branchColor?: string;
  /** Hex color for trunk (e.g. '#2d1607') */
  trunkColor?: string;
  /** Style of the main tree trunk */
  trunkStyle?: TrunkStyle;
  /** Architectural style of branches */
  branchStyle?: BranchStyle;
  /** Botanical shape for member leaves */
  leafStyle?: LeafStyle;
  /** Vector SVG paths ('svg') or textured image mode ('png') */
  leafRenderMode?: LeafRenderMode;
  /** Custom mapping of leaf styles to PNG URLs if leafRenderMode is 'png' */
  leafPngUrls?: Record<string, string>;
}

export declare class FamilyTreeInstance {
  constructor(container: string | HTMLElement, data: FamilyTreeNode | FamilyTreeNode[], options?: FamilyTreeOptions);

  /** Centers and scales the tree to fit within the viewport */
  fitView(smooth?: boolean): void;

  /** Updates the color palette and re-renders dynamically */
  setColors(leafColor: string, branchColor: string, trunkColor: string, trunkStyle?: TrunkStyle, leafStyle?: LeafStyle): void;

  /** Changes the trunk rendering style */
  setTrunkStyle(style: TrunkStyle): void;

  /** Changes the branch architecture style */
  setBranchStyle(style: BranchStyle): void;

  /** Changes the botanical leaf shape */
  setLeafStyle(style: LeafStyle): void;

  /** Switches between vector SVG and PNG texture render modes */
  setLeafRenderMode(mode: LeafRenderMode, urls?: Record<string, string>): void;

  /** Applies multiple style changes and re-renders once */
  setStyles(styles: Partial<FamilyTreeOptions>): void;

  /** Loads a new JSON dataset and recalculates tree geometry */
  loadData(newData: FamilyTreeNode | FamilyTreeNode[]): void;

  /** Triggers a browser download of the standalone vector SVG file */
  exportSVG(): void;

  /** Removes all event listeners, observers, and DOM elements */
  destroy(): void;
}

export interface FamilyTreeSVGStatic {
  new (container: string | HTMLElement, data: FamilyTreeNode | FamilyTreeNode[], options?: FamilyTreeOptions): FamilyTreeInstance;

  /** Static factory method to instantiate FamilyTreeSVG */
  create(container: string | HTMLElement, data: FamilyTreeNode | FamilyTreeNode[], options?: FamilyTreeOptions): FamilyTreeInstance;
}

declare const FamilyTreeSVG: FamilyTreeSVGStatic;
export default FamilyTreeSVG;
