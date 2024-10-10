# Recommendation Strategies

These are the planned recommendations strategies:
- **Vector-Based Similar Tracks** Look for similar tracks to the current track.
- **Vector-Based Reference Tracks** Look for similar tracks to the "next" track, based on reference dj set.
- **History-Based Used Tracks** Look for tracks that have been previously used "after" the current track.

## Vector-Based Similar Tracks

- The idea is to look for tracks that are similar to the current track. It migth be useful if the objective is to keep the "energy", although if used constantly it might stagnate the dj set.

### Technical Notes
- Requires a vector-db.
    - Vector-based similarity search*.
        - It would work by having the tracks described using a numerical vector (embedded), and doing similarity searches on the n-dimensional space*.

## Vector-Based Reference Tracks

- The idea is to have a reference dj set, and look for tracks that match the dj set as best as possible. This approach does not stagnate "energy", but might reduce originality by a little bit. Also, depending on the data available, a good-enough match might not be possible.

### Technical Notes
- Requires a way of storing reference dj sets.
    - Ability to store a permutation of songs.
    - Could be:
        - Scraped data from popular dj sets.
        - Previous dj sets from the user.
        - [MAYBE] Previous dj setes from other users (if approved by the user).
- Requires a vector-db.
    - Vector-based similarity search*.

## History-Based Used Tracks

- The idea is to check the previous permutations that have been created (which requires some sort of historical record) that include the current track. As a first-iteration, just show the tracks that were used before and after the current track. A limitation might be that it relies on previous historical data.

### Technical Notes
- Does not require vector-db (at lease as a first iteration).
- Requires a way of storing previous dj sets from the user.
    - Same mechanism for storing reference dj sets.
        - Linked to the user.
        - With privacy settings (public vs. private).
