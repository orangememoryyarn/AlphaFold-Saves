#duke #alphafold3-renderings 

## DNA Sequence

**I.** *5' -> 3' direction:* AACCTGGCTCCAGTCATCTTCCAGTCGACACGCCGGTATCTTGATTGACTATCACCGTTAGCCTTTATAATCCATCTTCACACCTGTCCATGCATATCTCACAAAAC
	- Length: 107 bases
	- Binding Site: 
		- *AC NNNN GTA YC*
		- *AC GCCG GTA TC*
			- Y -> T 
			- NNNN -> GCCG 

## Trials:

#### Without BaeI 

| Trial | Filename | Description                                                                                           | Results |
| ----- | -------- | ----------------------------------------------------------------------------------------------------- | ------- |
|       |          | Rendered one molecule of DNA Sequence I by inputting the 5' -> 3' sequence                            |         |
|       |          | Rendered ten molecules of DNA Sequence I by inputting the 5' -> 3' sequence                           |         |
|       |          | Rendered one molecule of DNA Sequence I by inputting the 5' -> 3' sequence and the 3' -> 5' sequence  |         |
|       |          | Rendered ten molecules of DNA Sequence I by inputting the 5' -> 3' sequence and the 3' -> 5' sequence |         |
#### With BaeI 

###### 5' -> 3' only

| Trial | Filename | Description                                                                         | Results |
| ----- | -------- | ----------------------------------------------------------------------------------- | ------- |
|       |          | Rendered one molecule of DNA Sequence I with one molecule of BaeI (5' -> 3' only)   |         |
|       |          | Rendered ten molecules of DNA Sequence I with one molecule of BaeI (5' -> 3' only)  |         |
|       |          | Rendered one molecule of DNA Sequence I with ten molecule of BaeI (5' -> 3' only)   |         |
|       |          | Rendered ten molecules of DNA Sequence I with ten molecules of BaeI (5' -> 3' only) |         |
###### 5' -> 3' and 3' -> 5' 

| Trial | Filename | Description                                                                                 | Results |
| ----- | -------- | ------------------------------------------------------------------------------------------- | ------- |
|       |          | Rendered one molecule of DNA Sequence I with one molecule of BaeI (5' -> 3' and 3' -> 5')   |         |
|       |          | Rendered ten molecules of DNA Sequence I with one molecule of BaeI (5' -> 3' and 3' -> 5')  |         |
|       |          | Rendered one molecule of DNA Sequence I with ten molecule of BaeI (5' -> 3' and 3' -> 5')   |         |
|       |          | Rendered ten molecules of DNA Sequence I with ten molecules of BaeI (5' -> 3' and 3' -> 5') |         |

---
