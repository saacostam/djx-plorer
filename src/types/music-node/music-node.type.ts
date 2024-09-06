import { Song } from "../song";


/**
 * Music Node. Used to build the recommendation graph
 *
 * @export
 * @interface MusicNode
 * @typedef {MusicNode}
 */
export interface MusicNode{
    /**
     * song of the node
     *
     * @type {Song}
     */
    song: Song;


    /**
     * edges to other nodes, based on if it was used on a previous dj set
     *
     * @type {MusicNode[]}
     */
    historyBasedEdges: MusicNode[];


    /**
     * edges to other nodes, based on their distance in vector space (similarity)
     *
     * @type {MusicNode[]}
     */
    distanceBasedEdges: MusicNode[];
}
