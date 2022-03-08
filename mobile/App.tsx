import React from 'react';
import {
	Text,
	Link,
	HStack,
	Center,
	Heading,
	Switch,
	useColorMode,
	NativeBaseProvider,
	VStack,
	Code,
} from 'native-base';
import NativeBaseIcon from '@components/NativeBaseIcon';

export default function App() {
	return (
		<NativeBaseProvider>
			<Center
				_dark={{ bg: 'blueGray.900' }}
				_light={{ bg: 'blueGray.50' }}
				px={4}
				flex={1}
			>
				<VStack space={5} alignItems="center">
					<NativeBaseIcon />
					<Heading size="lg">Welcome to NativeBase</Heading>
					<HStack space={2} alignItems="center">
						<Text>Edit</Text>
						<Code>App.tsx</Code>
						<Text>and save to reload.</Text>
					</HStack>
					<Link href="https://docs.nativebase.io" isExternal>
						<Text color="primary.500" underline fontSize={'xl'}>
							Learn NativeBase
						</Text>
					</Link>
					<ToggleDarkMode />
				</VStack>
			</Center>
		</NativeBaseProvider>
	);
}

// Color Switch Component
function ToggleDarkMode() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<HStack space={2} alignItems="center">
			<Text>Dark</Text>
			<Switch
				isChecked={colorMode === 'light'}
				onToggle={toggleColorMode}
				aria-label={
					colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
				}
			/>
			<Text>Light</Text>
		</HStack>
	);
}
