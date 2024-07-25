# AlphaFold-Saves

## Trials

The primary structure of the BaeI enzyme was sourced from [UniProt's Fasta Sequence](https://www.uniprot.org/uniprotkb/I2HRB8/history). DNA sequences were generated using DNAgen. Trials comprised of:
  - the BaeI enzyme (not present, 1 enzyme, 10 enzymes)
  - DNA sequences I-V:
    - not present, 1 molecule, 10 molecules
    - DNA sequences II and III were duplicates; I realized this immediately before running the trials with BaeI

## Notes

  - The piDDT scores of the DNA sequences were often Very low (pIDDT < 50)
  - The BaeI enzymes often rarely interacted with the DNA molecules unless present in abundance
  - After some of the initial DNA renderings suggested that the DNA molecules were single-stranded (it looked that way), I added the reverse complement of the 5' -> 3' direction of the DNA sequences *as* another DNA molecule in AlphaFold. This significantly increased pIDDT scores from  Very Low -> mostly Confident and occasionally low(See BaeI x1 and DNA Sequence IV Both Strands x1), and the molecules appeared to become double-stranded. I continued with this for the rest of the trials.

## DNAgen

DNAgen is a small web app I made to generate DNA sequences to test the BaeI enzyme on. Since AlphaFold 3 only accepts the 4 nucleotide bases in the 5'->3' direction as inputs, the enzyme's recognition site (ACNNNNGTAYC in the 5'->3' direction) needs to be processed slightly before use. DNAgen allows the user to paste a sequence into a textbox, after which it returns one of the possible ACGT combinations that could result. It swaps the bases as described in [Nucleotide symbols](https://www.hgmd.cf.ac.uk/docs/nuc_lett.html).

## Next

  1. Label each of the trials with the results to permit easier analysis
  2. See if I need to use the reverse complement as a 5' --> 3' input
  3. Test out alternative methods of performing these predictions
  4. Use ChimeraX to notate the amino acids that interact when binding takes place
  5. Rerun tests with single 5' -> 3' DNA molecule
