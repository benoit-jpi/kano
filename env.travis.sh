#!/bin/bash
if [[ $TRAVIS_BRANCH == "master" ]]
then
	export DEBUG=kalisio*
	export FLAVOR=dev
	export DOMAIN=kapp.dev.kalisio.xyz
fi
if [[ $TRAVIS_BRANCH == "test" ]]
then
	if [[ -z "$TRAVIS_TAG" ]]
	then
		export DEBUG=
		export FLAVOR=test
		export DOMAIN=kapp.test.kalisio.xyz
	else
		export DEBUG=
		export FLAVOR=prod
		export DOMAIN=kapp.kalisio.xyz
	fi
fi

echo "DEBUG=$DEBUG" > .env
echo "FLAVOR=$FLAVOR" >> .env
echo "DOMAIN=$DOMAIN" >> .env