bin := node_modules/.bin/

# By default, make will run in silent mode
ifndef VERBOSE
.SILENT:
endif

test:
	$(bin)mocha

.PHONY: test