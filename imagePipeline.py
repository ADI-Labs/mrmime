from PIL import Image

def image_upload(inputPath, outputPath):

	"""
	Converts any image file to text file of list of RGB columns (split widthwise)
	"""

	im = Image.open(inputPath)
	(width, height) = im.size

	resized_height = (144*height)/width

	im = im.resize((144, resized_height))

	f = open(outputPath, 'w')

	rgb_list = list(im.getdata())

	for counter, each_rgb in enumerate(rgb_list):
		f.write(str(each_rgb))
		if (counter+1)%144 == 0: f.write('\n')
		else: f.write(',')

	f.close()

	print 'Saved at: ' + outputPath

	# # middle pixel in each bin
	# bin_median = width/144/2

	# binned_list = []
	# for column in rgb_list[::width]:

	
	# # f = open(outputPath, 'w')
	# # rgb_column_list = []

	# # for row in range(width):
	# # 	rgb_column_list.append(rgb_list[row::width])

	# # binned_rgb_column_list = []
	# # for column in rgb_column_list:
	# # 	for i in range(144):
	# # 		binned_rgb_column_list.append(column[i])
	# # 		column = rgb_split_list[column]

	# # f.close()

	# # return rgb_split_list, f