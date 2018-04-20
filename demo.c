void SetUp(){
	fptr = fopen("auton.txt", "r");
	if (!(fptr == NULL)){
		for(int i = 0; i!=3;i++){
			printf("Printing contents of the file\n\n");
			delay(1000);
		}
		char string[5];
		while(fgets(string, 5,fptr)!=NULL){
			printf("%s", string);
			delay(20);
		}
		fclose(fptr);
		printf("\nDONE!");
	}

	fptr = fopen("auton.txt", "w");
	fprintf(fptr, "file start");
  //write debuging info to fptr
}
