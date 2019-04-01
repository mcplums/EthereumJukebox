from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time
import traceback
import webbrowser

def openYoutube(url):

	try:

		remote = 0
		debug = 0

		if remote == 1:
			from pyvirtualdisplay import Display
			display = Display(visible=0, size=(800, 600))
			display.start()
			options = webdriver.ChromeOptions()
			options.add_argument('--no-sandbox')
			options.add_argument('--disable-extensions')
			options.add_argument('--headless')
			options.add_argument('--disable-gpu')
			driver = webdriver.Chrome(chrome_options=options)
		else:
			driver = webdriver.Chrome()

		driver.get(url)
		time.sleep(20)
		driver.close()
		return_dict['transactions'] = transactions


	except:
		print(traceback.format_exc())
		driver.close()

openYoutube('https://www.youtube.com/watch?v=y6120QOlsfU')

