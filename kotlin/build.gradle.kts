plugins {
    kotlin("jvm") version "2.2.20"
    application
}

group = "com.vayana"
version = "1.0-SNAPSHOT"

application {
    mainClass.set("aoc2025.MainKt")
}

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
}

tasks.test {
    useJUnitPlatform()
}
kotlin {
    jvmToolchain(21)
}